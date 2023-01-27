# SvelteKit + PocketBase Template
For developing apps with SvelteKit, PocketBase, and Tailwind. Security is not guaranteed; further measures should be taken to ensure authentication and database function properly.

If you are already familiar with working with PocketBase, simply ignore the below configuration.

Inspired by https://github.com/fireship-io/pocketchat-tutorial.

## Config
1. Set up a PocketBase instance. At least for testing purposes, [pockethost.io](https://pockethost.io) is a great resource.
2. In Pocketbase, edit the API rules of the existing "users" collection to match the following:
![API rules for "users" collection](/screenshots/users_rules.png)
3. Create a new "messages" collection, and add two fields "text" and "user" to it as follows:
![Field "text" for new "messages" collection](/screenshots/messages_text.png)
![Field "user" for new "messages" collection](/screenshots/messages_user.png)
4. Edit the API rules of the "messages" collection to match the following:
![API rules for "messages" collection](/screenshots/messages_rules.png)
5. Back in your code, create a .env file and set PUBLIC_POCKETBASE_URL to the base URL of your PocketBase instance.
6. Your full-stack application should now be functional!