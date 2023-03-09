class BoxesController < ApplicationController
    
    def index
        boxes = Box.all
        render json: boxes
    end

    def create
        box = Box.create(box_params)
        if box.valid?
            render json: box
        else
            render json: box.errors, status: 422
        end
    end

    def destroy
        box = Box.find(params[:id])
        if box.destroy
            render json: box
        else
            render json: box.errors
        end
    end

    def update
        box = Box.find(params[:id])
        box.update(box_params)
        if box.valid?
            render json: box
        else
            render json: box.errors, status: 422
        end
    end


    private
    def box_params
        params.require(:box).permit(:name, :contents, :size, :user_id)
    end
end

