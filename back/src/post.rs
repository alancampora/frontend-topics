#[derive(Serialize, Deserialize)]
pub struct Post {
    pub id: Option<i32>,
    pub title: String,
    pub description: String,
    pub text: String,
    pub user: String
}
