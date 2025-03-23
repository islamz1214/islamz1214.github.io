FROM ruby:3.1
WORKDIR /srv/jekyll
COPY . .
RUN gem install jekyll bundler
RUN bundle install
EXPOSE 4000
CMD ["jekyll", "serve", "--host", "0.0.0.0"]