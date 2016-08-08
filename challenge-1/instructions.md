<<<<<<< HEAD
# Challenge 0 Instructions

For this challenge you will be creating an automated build process using Node that incorporates a local web server, compiles Sass to CSS and watches Sass files for changes.

## Requirements

1. Create a build system using Grunt, Gulp, or NPM.
	- Create a `package.json` file.
	- Install modules needed using `npm install <package-name> --save-dev
	- Using your build tool create a localhost environment that points to `challenge-0/`
	- Using your build tool compile Sass (SCSS) to CSS within challenge directory (ex. `challenge-0/sass` to `challenge-0/css`).
	- Using your build tool watch for changes and compile each change on Save.

2. Use Sass (SCSS) to build a semantic layout with floats without using a standard column-based layout.
	- Use Sass nesting to construct the page as described under "Page Layout".

3. Within `index.html` and using HTML5 standards build a simple page as described under "Page Layout" and with these basic requirements:
	- Make the layout responsive for all devices with a maximum width of `1000px` for inner content.
	- Header and footer should have a solid background color and extend the full width of the page (or 100% of screen) while their inner contents are constrained to `1000px` wide.

## Page Layout

```
  |----------------------------------------------|
  | HEADER w/ H1 Title                           |
  |----------------------------------------------|
  |------------------------------||--------------|
  | H2 Heading                   || H3 Heading   |
  | Paragraph (lorem ipsum)      || Paragraph    |
  | Image                        ||              |
  | H2 Heading                   || H3 Heading   |
  | Paragraph (lorem ipsum)      || Paragraph    |
  |------------------------------||--------------|
  |----------------------------------------------|
  | FOOTER                                       |
  |----------------------------------------------|
```

## Assets

No image assets are required for this challenge.
=======
# Challenge 1 Instructions

For this challenge we will focus on using Sass to create a CSS for a series of images in a sprite using the build tool that you constructed in Challenge 0.


## Requirements

1. Use the build tool that you constructed in Challenge 0.
	- Using your build tool compile Sass (SCSS) to CSS within challenge directory (ex. `challenge-1/sass` to `challenge-1/css`).

2. Create a Sass `@for` loop that generates a series of classes and properties for an icon sprite (8 icons total).
	- default icon state is the pink and hovered state is light blue.

3. Icons classes should use `@extend` and `@for` loop to generate the classes and keep duplicate properties to a minimum.

4. `:hover` states should be contained within the `@for` loop for each icon.

3. Using `challenge-1/index.html` construct HTML that shows all six icons on the page inline from 1 to 8.

**Note:** For the default and hover states you will need to change the position dynamically based on icon number and a set number of pixels. Each icon is contained within a 50px square box.


## Assets

The only asset for this challenge is `assets/icons.png`.

Refer to the `assets/interactions.gif` on what the end result will look like.
>>>>>>> 7d9073792adf3878c66713bf2166115ac5a50361


## Resources

<<<<<<< HEAD
Check out resources on for [Grunt](http://gruntjs.com/getting-started), [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md), and [NPM](https://docs.npmjs.com/) on their respective sites.

If you are interested in using Node as your build tool, please refer to a great article by Keith Cirkel, "[How to Use NPM as a Build Tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)".

For Sass, please refer to [Sass Basics](http://sass-lang.com/guide) and the [Sass Documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) for more information on constructing Sass to CSS.
=======
Please check out the resources on [http://sass-lang.com/guide]() for help learning basic Sass syntax.

Review the Sass documentation topics about [@extend](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend) and [@for](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_10) loops for more ideas on how to accomplish the challenge.

Take a look at Sass [Interpolation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_) so that you can use variables in selectors and property names.
>>>>>>> 7d9073792adf3878c66713bf2166115ac5a50361
