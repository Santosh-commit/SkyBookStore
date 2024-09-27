import mongoose from "mongoose";

const bookSchema=mongoose.Schema({

    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
}) // created schema as we have all the data under list.json we seen in frontend before

const Book=mongoose.model("Book",bookSchema);// whatever data will come in BookSchema(veriable) that data will be stored in "Book"(collection-under db)

export default Book;