user = User.where(email: "test@example.com").first_or_create(password: "password", password_confirmation: "password")

boxes = [
    {
        name: "Kitchen",
        contents: "utensils, kitchen towels, plates, bowls",
        size: "large"
    },
    {
        name: "Bedroom",
        contents: "pillow, sheets, comforter",
        size: "extra large" 
    },
    {
        name: "Bathroom",
        contents: "towels, soap, shampoo, shower curtain, floor mats",
        size: "medium"
    },
    {
        name: "Living Room",
        contents: "books, sofa pillows, knick knacks",
        size: "medium"
    },
    {
        name: "Bedroom 2",
        contents: "pillow, sheets, comforter",
        size: "large"
    }
]

boxes.each do |box|
  user.boxes.create(box)
  p "creating: #{box}"
end