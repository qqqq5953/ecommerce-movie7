<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <section class="modal-header bg-dark">
          <h5 class="modal-title text-white" id="exampleModalLabel">
            <span>新增產品</span>
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </section>
        <section class="modal-body">
          <form
            class="row"
            action="/api/thisismycourse2/admin/upload"
            enctype="multipart/form-data"
            method="post"
          >
            <div class="col-lg-4">
              <!-- 輸入圖片網址 -->
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <div class="mb-3 input-group">
                  <input
                    type="url"
                    id="image"
                    class="form-control"
                    placeholder="請輸入一個或多個連結"
                    v-model="inputImgUrl"
                    ref="multipleImages"
                  />
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="removeImages"
                  >
                    移除
                  </button>
                </div>
                <div class="">
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="addImages"
                  >
                    新增圖片
                  </button>
                </div>
              </div>
              <!-- 上傳圖片 -->
              <div class="mb-3">
                <label for="customFile" class="form-label"
                  >或 上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input
                  type="file"
                  name="file-to-upload"
                  id="customFile"
                  class="form-control"
                  ref="fileInput"
                  @change="uploadFile"
                />
              </div>
              <!-- 顯示圖片檔案或連結 -->
              <img
                v-for="item in tempProduct.imageUrl"
                :key="item"
                class="img-fluid d-block mt-1 py-3 border-bottom border-2 w-100 border-primary"
                :src="item"
                alt=""
              />
            </div>
            <div class="col-lg-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入標題"
                  v-model="tempProduct.title"
                  required
                />
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-12">
                  <label for="category" class="form-label">分類</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                    required
                  />
                </div>
                <div class="mb-3 col-12">
                  <label for="unit" class="form-label">單位</label>
                  <input
                    type="text"
                    class="form-control"
                    id="unit"
                    placeholder="請輸入單位"
                    v-model="tempProduct.unit"
                    required
                  />
                </div>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-12">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="origin_price"
                    placeholder="請輸入原價"
                    v-model="tempProduct.origin_price"
                    required
                  />
                </div>
                <div class="mb-3 col-12">
                  <label for="price" class="form-label">售價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    placeholder="請輸入售價"
                    v-model="tempProduct.price"
                    required
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  placeholder="請輸入產品描述"
                  v-model="tempProduct.description"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="請輸入產品說明內容"
                  v-model="tempProduct.content"
                ></textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                    v-model="tempProduct.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </form>
        </section>
        <section class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-product', tempProduct)"
          >
            確認
          </button>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from '@/mixins/modalMixin';

export default {
  mixins: [modalMixins],
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      tempProduct: {},
      inputImgUrl: ''
    };
  },
  watch: {
    product() {
      this.tempProduct = this.product;
      if (this.tempProduct.is_enabled) this.tempProduct.is_enabled = 1;
    }
  },
  methods: {
    addImages() {
      console.log('inputImgUrl', this.inputImgUrl);

      // 沒有圖片連結即無法新增
      if (!this.inputImgUrl) return;

      // 如為新增第一個連結，幫 this.tempProduct 新增 imageUrl 屬性
      if (this.tempProduct.imageUrl === undefined) {
        this.tempProduct.imageUrl = [];
      }

      this.tempProduct.imageUrl.push(this.inputImgUrl);
      console.log('tempProduct', this.tempProduct);

      // 將輸入欄位清空
      this.inputImgUrl = '';
      // this.$refs.multipleImages.value = '';
    },
    removeImages() {
      this.tempProduct.imageUrl.pop();
    },
    async uploadFile() {
      const uploadedFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      console.dir(uploadedFile);

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      const response = await this.$http.post(api, formData).catch((err) => {
        console.log(err);
      });

      console.log('response', response);

      if (response.data.success) {
        this.tempProduct.imageUrl = response.data.imageUrl;
      }

      console.log('this.tempProduct.imageUrl', this.tempProduct.imageUrl);
    }
  }
};
</script>
