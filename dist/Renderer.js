class Renderer {
  constructor(data) {
    this.data = data;
  }
  render() {
    const source = $('#template').html();
    const template = Handlebars.compile(source);
    let information = this.data;
    let newHTML = template({ information });
    $('#list').append(newHTML);
  }
}
