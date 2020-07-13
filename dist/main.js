$('#btn').click(() => {
  let info = $('#input').val();
  $.get(`/recipes/${info}`, (data) => {
        
    let ren = new Renderer(data)
    ren.render()
          
      
  });
});
