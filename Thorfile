ROOT =  File.expand_path(File.dirname(__FILE__))

class Convert < Thor
  desc "haml", "converts and puts haml in www"
  def haml
    `haml -r #{ROOT}/src/haml/helpers.rb #{ROOT}/src/haml/index.haml #{ROOT}/www/index.html`
    `haml -r #{ROOT}/src/haml/helpers.rb #{ROOT}/src/haml/index_mobile.haml #{ROOT}/www/index_mobile.html`
  end

  desc "sass", "converts and puts sass in www"
  def sass
    `sass --update #{ROOT}/src/sass:#{ROOT}/www/stylesheets`
  end

  desc "coffee", "converts and puts coffeescript in www"
  def coffee
    `coffee -o #{ROOT}/www/javascripts -c #{ROOT}/src/coffeescript/`
  end

  desc "all", "Convert haml, sass and coffee"
  def all
    invoke :haml
    invoke :sass
    invoke :coffee
  end

  desc "watch", "Start watchr to convert haml, sass and coffee source as it is modified"
  def watch
    invoke :all
    system "cd #{ROOT} && watchr tasks/converters.watchr"
  end
end