from flask import Flask, request, render_template
from stories import Story

app = Flask(__name__)

# story = Story(
#     ["place", "noun", "verb", "adjective", "plural_noun"],
#     """Once upon a time in a long-ago {place}, there lived a
#        large {adjective} {noun}. It loved to {verb} {plural_noun}."""
# )

story = Story(
    ["adjective", "animal", "verb", "adverb", "plural_noun"],
    """In a {adjective} forest, there was a curious {animal} who loved to {verb} {adverb} with its {plural_noun}."""
)


@app.route('/')
def home_page():
    """Show home page"""
    fields = story.prompts
    return render_template("home.html", fields=fields)


@app.route('/story')
def show_story():
    """Show story form"""
    prompts = story.prompts
    story_text = story.generate(request.args)
    return render_template("story.html", prompts=prompts, story_text=story_text)