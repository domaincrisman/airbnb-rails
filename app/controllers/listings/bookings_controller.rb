module Listings
  class BookingsController < ApplicationController
    before_action :set_listing
    def new
      @booking = @listing.bookings.new
    end
    def create
    end

    private

    def set_listing
      @listing = Listing.friendly.find(params[:listing_id])
    end
  end
end