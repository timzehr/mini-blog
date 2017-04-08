import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createBlogPost() {
      this.get('store').createRecord('blog-post', {
        blogPostTitle: this.get('newBlogTitle'),
        blogPostEntry: this.get('newBlogMainText')
      }).save();
      this.set('newBlogTitle', '');
      this.set('newBlogMainText', '');
    },
    deleteBlogPost(blogPost) {
      blogPost.destroyRecord();
    }
  }
});
