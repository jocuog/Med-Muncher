class SessionsController < ApplicationController

    def login
        patient = Patient.find_by(name: params[:username])
        if patient&.authenticate(params[:password])
            session[:patient_id] = patient.id
            render json: patient, status: :ok
        else 
            render json: { error: "not authorized"}, status: 401
        end 
    end 

    def logout
        if session[:patient_id]
            session.destroy
            head :no_content
        else 
            render_unauthorized
        end 
    end 
end
