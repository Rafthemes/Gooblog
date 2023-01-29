# ✨ Gooblog

Blog Hugo Theme By Rafthemes

# 📸 Screnshoot
![img](gooblog.png)


# ⚡ Performance

Desktop

![img](desktop.png)

Mobile

![img](mobile.png)


# 📗 Version

```
minimum hugo version 0.101.0
tailwindcss version 3.1.5
```

# 🥕 Setup dev env

Run "npm install" (first time only)

Then configure `config.toml`

# 🥕 Run hugo server

1. run hugo server

```
hugo server
```

2. run tailwindcss server (if you edit some style with tailwindcss)

```
npm run tailwind-dev
```

Tailwind CSS file located at `./tailwindcss`.
Generated Tailwind CSS located at `./static/css/main.css`.

# 🥕 Build hugo site

```
hugo --ignoreCache --minify
```

# 🥕 Create new post

Go to your Hugo site directory, and run:

```markdown
$ hugo new content/posts/[your new post file name].md
```

Example:
```markdown
$ hugo new content/posts/hello-world.md
```

# 🥕 Editing new post

Your new post is located in directory "content/posts/".
So at the full path its look like "content/posts/[your new post file name].md".

You can edit your created post file with your favorite text editor.

Example if you use vim:

```shell
$ vim content/posts/hello-world.md
```
HTML code is supported.

# 🍻 Summary

To summary what all you need to do:

1. Make sure you use latest version of Hugo
2. Create new markdown file for new post with Hugo command
3. Edit your post
4. Finish!! As simple as that.


# ©️ License

Licensed under [MIT License](https://mit-license.org/).
