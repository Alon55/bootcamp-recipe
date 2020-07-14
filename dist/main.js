$('#btn').click(() => {
  let info = $('#input').val();
  $.get(`/recipes/${info}`, (data) => {
    let ren = new Renderer(data);
    ren.render();
  });
});

$('#list').on('click', '.img', function () {
  console.log($(this).closest($('.box')).find($('li')).html());
});
