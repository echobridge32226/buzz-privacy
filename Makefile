BREW_RUBY_BIN := /opt/homebrew/opt/ruby/bin
BUNDLE        := $(BREW_RUBY_BIN)/bundle

.PHONY: install serve build clean

install:
	$(BUNDLE) install

serve: install
	$(BUNDLE) exec jekyll serve --open-url

build: install
	$(BUNDLE) exec jekyll build

clean:
	rm -rf _site .jekyll-cache
