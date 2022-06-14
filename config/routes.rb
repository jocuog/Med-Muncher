Rails.application.routes.draw do
  
  resources :medications
  resources :doctors
  resources :patients
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  # Initialize authentication patient
  get'/me', to: 'patients#me'
  get '/my_doctors', to: 'patients#my_doctors'
  # post '/my_doctors', to: 'patients#post_my_doctors'
  get '/my_medications', to: 'patients#my_medications'

  post '/signup', to: 'patients#signup'
  # Login / Logout 
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
