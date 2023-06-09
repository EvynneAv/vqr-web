<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { RouteLocationNormalized, onBeforeRouteUpdate, useRoute } from 'vue-router'
import { EventoCollection } from '../types'
import { useEventoService } from '../api/eventoService'
import LoadingContainer from '../components/LoadingContainer.vue';
import { useUploadFile } from '../composables/useUploadURL';
import { useErrorUtil } from '../composables/useApplicationError';
import { useNotificationStore } from '../stores/notificationStore';

const notificationStore = useNotificationStore()
const mangaService = useMangaService()
const mangaCollection = ref({} as MangaCollection)
const loading = ref(true)
const mangas = computed(() => mangaCollection.value.items)
const pagination = computed(() => mangaCollection.value.pagination)
const selectedManga = ref({ id: -1, title: '' })

const route = useRoute()
const currentPage = route.query.page ? Number(route.query.page) : 1


onMounted(async () => {
  const result = await mangaService.get(currentPage)
  if (!useErrorUtil().isAppError(result)) {
    mangaCollection.value = result
    loading.value = false
  } else {
    notificationStore.error(result.message)
  }
})

onBeforeRouteUpdate(async (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  if (to.query.page && to.query.page != from.query.page) {
    const page = Number(to.query.page)
    const result = await mangaService.get(page)
    if (!useErrorUtil().isAppError(result)) {
      mangaCollection.value = result
      loading.value = false
    }
  }
})

function remove() {
  const result = mangaService.remove(selectedManga.value.id)
  if (useErrorUtil().isAppError(result)) {
    notificationStore.error(result.message)
  } else {
    mangaCollection.value.items.splice(mangaCollection.value.items.findIndex(m => m.id === selectedManga.value.id), 1)
    notificationStore.add(`Manga ${selectedManga.value.title} removido com sucesso`)
  }
}

function askConfirmation(id: number, title: string) {
  selectedManga.value = { id: id, title: title }
}

</script>

<template>
  <LoadingContainer :loading="loading">

    <router-link to="/mangas/create" class="btn btn-success"><i class="bi bi-plus-circle"></i> Adicionar</router-link>
    <div class="row">
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <router-link class="page-link" aria-label="Previous" :class="{ disabled: pagination.page == 1 }"
              :to="{ path: $route.path, query: { page: pagination.page - 1 } }">
              <span aria-hidden="true">&laquo;</span>
            </router-link>
          </li>
          <li class="page-item" v-for="pageNumber in pagination.pageCount" :key="pageNumber">
            <router-link class="page-link" :class="{ active: pagination.page == pageNumber }"
              :to="{ path: $route.path, query: { page: pageNumber } }">{{ pageNumber }}
            </router-link>
          </li>

          <li class="page-item">
            <router-link class="page-link" aria-label="Next"
              :class="{ disabled: pagination.page == pagination.pageCount }"
              :to="{ path: $route.path, query: { page: pagination.page + 1 } }">
              <span aria-hidden="true">&raquo;</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="manga in mangas">
          <th scope="row">{{ manga.number }}</th>
          <td><img :src="useUploadFile(manga.cover.url)" class="img-fluid"> {{ manga.title }}</td>
          <td>{{ manga.price }}</td>
          <td>
            <a class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#confirmationModal"
              @click="askConfirmation(manga.id, manga.title)"><i class="bi bi-trash"></i></a>
            <router-link :to="`/mangas/${manga.id}/edit`" class="btn btn-sm btn-primary"><i
                class="bi bi-pencil"></i></router-link>
          </td>
        </tr>
      </tbody>
    </table>


    <div class="modal fade" id="confirmationModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Confirmação</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Você tem certeza que deseja deletar o manga <strong>{{ selectedManga.title }}</strong>?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="remove">Yes</button>
          </div>
        </div>
      </div>
    </div>
  </LoadingContainer>
</template>