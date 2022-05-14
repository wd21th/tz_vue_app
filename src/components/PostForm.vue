<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>


  <!-- <input type="file" id="image-input" accept="image/jpeg, image/png, image/jpg"
  
  @change="choose_image"
  >
  @input="choose_image"
 -->
  <!-- <div id="display-image">Изображение</div> -->


    <my-input
      v-focus
      v-model="post.title"
      type="text"
      placeholder="Название"
    />
    <my-input
      v-model="post.body"
      type="text"
      placeholder="Описание"
    />
    <my-button
      style="align-self: flex-end; margin-top: 15px"
      @click="createPost"
    >
      Создать
    </my-button>
  </form>
</template>

<script>









export default {
  data() {
    return {
      post: {
        title: '',
        body: '', 
        image: {}
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    },

    choose_image(event){
console.log("Choose")
console.log(event.type)

// const image_input = document.querySelector("#image-input");

// image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;

    console.log(uploaded_image)

    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  // console.log(this.files[0])
  reader.readAsDataURL(this.files[0]);
// });



    }
  },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

</style>
