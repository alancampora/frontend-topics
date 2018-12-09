Rails.application.routes.draw do

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  root to: 'pages#home'

  namespace 'api' do
    namespace 'v1' do 
      resources :posts
    end
  end

end
