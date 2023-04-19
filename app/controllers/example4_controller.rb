class Example4Controller < ApplicationController
  def index
    @posts = Post.all
    @categories = @posts.pluck(:category).uniq
    @posts = Post.where(category:params[:category]) if params[:category].present?
  end
  def posts
  end
end
