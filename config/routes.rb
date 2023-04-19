Rails.application.routes.draw do
  get 'example4/index'
  get 'example3/index'
  get 'messages', to: 'example3#messages'
  get 'posts', to: 'example4#posts'
  get 'example2/index'
  get 'example1/index'
  get 'home/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
