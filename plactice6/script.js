Vue.createApp({
  data() {
    return {
	    step: "input",

      name: "",
      email: "",
      age: null,
      gender: "",
      skills: [],
      frequency: "",
      comment: "",
      agreed: false,

      errors: {}
    };
  },

  methods: {
    confirmForm(){
      this.errors={};

      if(this.name === ""){
        this.errors.name = "名前を入力してください";
      }

      if(this.email === ""){
        this.errors.name = "メールアドレスを入力してください";
      }else if(!this.email.includes("@")){
        this.errors.email = "正しいメールアドレスを入力してください";
      }

      if(this.gender === ""){
        this.errors.gender = "性別を選択してください";
      }

      if(this.skills.length === 0){
        this.errors.age = "1つ以上選択してください";
      }

      if(this.frequency === ""){
        this.errors.frequency = "学習頻度を選択してください";
      }

      if(this.comment === ""){
        this.errors.comment = "コメントを入力してください";
      }

      if(!this.agreed){
        this.errors.agreed = "利用規約への同意が必要です";
      }

      if(Object.keys(this.errors).length === 0){
        this.step = "confirm";
      }
    },

    backToInput(){
      this.step = "input";
    },

    submitForm(){
      this.step= "complete";
    }
  }
}).mount("#app");