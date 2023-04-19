class ItemsController < ApplicationController
  def index
    @items = Item.all
    @categories = Item.pluck(:category).uniq # get all unique categories from items
    
    @items = @items.where(category: params[:category]) if params[:category].present?

    respond_to do |format|
      format.html
      format.js { render partial: 'items', locals: { items: @items } }
    end
  end
end
