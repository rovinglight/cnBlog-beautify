class dataFetcher {
  constructor () {
    this.data = {
      posts: [],
      post: {}
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
    let post_title = document.querySelector('#cb_post_title_url').innerText;
    let post_body = document.querySelector('#cnblogs_post_body');
    let post_next_prev = document.querySelectorAll('#post_next_prev a');
    let next_prev_frag = document.createDocumentFragment();
    let social_buttons = document.querySelector('#green_channel');
    let comment = document.querySelector('#comment_form');
    let comments = document.querySelector('#blog-comments-placeholder');
    this.data.post.commentDetail = comments;
    this.data.post.comment = comment;
    this.data.post.social_buttons = social_buttons;
    this.data.post.next_prev = [];
    [].forEach.call(post_next_prev, (link) => {
      if (link.innerText.length > 2) {
        next_prev_frag.appendChild(link);
      }
    });
    this.data.post.next_prev = next_prev_frag;
    this.data.post.title = post_title;
    this.data.post.body = post_body;
    return this.data
  }

}

export default new dataFetcher();
