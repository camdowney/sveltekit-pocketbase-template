# SvelteKit + PocketBase Template
For developing apps with SvelteKit, PocketBase, and Tailwind. Security is not guaranteed; further measures should be taken to ensure authentication and database function properly.

If you are already familiar with working with PocketBase, simply ignore the below configuration.

Inspired by https://github.com/fireship-io/pocketchat-tutorial.

## Config
1. Set up a PocketBase instance. At least for testing purposes, [pockethost.io](https://pockethost.io) is a great resource.
2. In Pocketbase, edit the API Rules of the existing "users" collection to match the following:
    * List/Search Action - Custom Rule: id = @request.auth.id
    * View Action - Custom Rule: id = @request.auth.id
    * Create Action - Custom Rule: (empty)
    * Update Action - Custom Rule: id = @request.auth.id
    * Delete Action - Custom Rule: id = @request.auth.id
    * Manage Action - Admins Only: (empty)
3. Create a new "messages" collection, and add two fields as follows:
    1. Text field named "text"
        * Max Length = 100
        * Nonempty = true
    2. Relation field named "user"
        * Collection = "users"
        * Max Select = 1
        * Nonempty = true
4. Edit the API Rules of the "messages" collection to match the following:
    * List/Search Action - Custom Rule: (empty)
    * View Action - Custom Rule: (empty)
    * Create Action - Custom Rule: user = @request.auth.id
    * Update Action - Admins Only: (empty)
    * Delete Action - Admins Only: (empty)
5. Back in your code, create a .env file and set PUBLIC_POCKETBASE_URL to the base URL of your PocketBase instance.
6. Your full-stack application should now be functional!