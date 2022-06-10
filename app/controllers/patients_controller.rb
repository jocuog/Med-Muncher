class PatientsController < ApplicationController
  before_action :set_patient, only: [:show, :update, :destroy]

  # POST /signup
  def signup 
    patient = Patient.create!(patient_params)
    session[:patient_id] = patient.id
    render json: patient, status: 201
  end

  def me
    patient = Patient.find_by(id: session[:patient_id])
    if patient
      render json: patient
    else
      render_unauthorized
    end
  end 

  def my_doctors
    patient = Patient.find_by(id: session[:patient_id])
    render json: patient.doctors
  end 
  
  def my_medications
    patient = Patient.find_by(id: session[:patient_id])
    render json: patient.medications
  end 

  # GET /patients
  def index
    @patients = Patient.all

    render json: @patients
  end

  # GET /patients/1
  def show
    render json: @patient
  end

  # POST /patients
  def create
    @patient = Patient.new(patient_params)

    if @patient.save
      render json: @patient, status: :created, location: @patient
    else
      render json: @patient.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /patients/1
  def update
    if @patient.update(patient_params)
      render json: @patient
    else
      render json: @patient.errors, status: :unprocessable_entity
    end
  end

  # DELETE /patients/1
  def destroy
    @patient.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_patient
      @patient = Patient.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def patient_params
      params.require(:patient).permit(:name, :username, :avatar, :image, :points, :level, :password)
    end
end
