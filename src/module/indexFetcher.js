class indexFetcher {
  constructor () {
    this.data = {
      posts: []
    }
  }
  fetchIndex () {
    let post_titles = document.querySelectorAll('.postTitle>a');
    let post_summs = document.querySelectorAll('.c_b_p_desc');
    let post_descs = document.querySelectorAll('.postDesc');
    [].forEach.call(post_titles, (title, index) => {
      let post = {}
      post.title = title.innerText
      post.url = title.href
      this.data.posts[index] = post
    });
    [].forEach.call(post_summs, (summ, index) => {
      this.data.posts[index].summ = summ.innerText.slice(4, -4)
    });
    [].forEach.call(post_descs, (desc, index) => {
      this.data.posts[index].date = desc.innerText.substr(9, 10)
    });
    return this.data
  }
  fetchPost () {
    
  }

}

export default new indexFetcher();
