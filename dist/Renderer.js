

class Renderer {
    constructor(data){
        this.data = data
    }
    render(){
        $('#list').empty()
       
        for (const d of this.data) {
           
     $('#list').append(`<div class="box"><a href="${d.href}">${d.title}</a><p></p><img class="img" src="${d.thumbnail}"><ul class="ingr">Ingredients:</ul></div>`)
            for (let i = 0; i < d.ingredients.length; i++) {
               $('.ingr').append(`<li>${d.ingredients[i]}</li>`)
                
            }
            console.log(d.ingredients[0])
        }
    }
    
    
}

