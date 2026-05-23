import { redirect } from "@sveltejs/kit";

export async function load() {
    throw redirect(302, "https://yolwoocle.github.io/nsi-site-webdev/");
}