#![feature(plugin)]
#![plugin(rocket_codegen)]

extern crate rocket;
#[macro_use] extern crate rocket_contrib;
#[macro_use] extern crate serde_derive;

use rocket_contrib::{Json, Value};

mod post;
use post::{Post};

#[post("/", data = "<post>")]
fn create(post: Json<Post>) -> Json<Post> {
    post
}

#[get("/")]
fn read() -> Json<Value> {
    Json(json!([
        "post 1", 
        "post 2"
    ]))
}

#[put("/<id>", data = "<post>")]
fn update(id: i32, post: Json<Post>) -> Json<Post> {
    post
}

#[delete("/<id>")]
fn delete(id: i32) -> Json<Value> {
    Json(json!({"status": "ok"}))
}

fn main() {
    rocket::ignite()
        .mount("/post", routes![create, update, delete])
        .mount("/posts", routes![read])
        .launch();
}
