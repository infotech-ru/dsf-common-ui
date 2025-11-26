# _plugins/package_version.rb
require 'json'

module Jekyll
  class PackageVersionTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
    end

    def render(context)
      package_json = JSON.parse(File.read('package.json'))
      
      case @text
      when 'version'
        package_json['version']
      when 'name'
        package_json['name']
      when 'description'
        package_json['description']
      else
        package_json['version']
      end
    end
  end
end

Liquid::Template.register_tag('package_version', Jekyll::PackageVersionTag)