# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "videogame-glossary-jekyll-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["michellejt"]
  spec.email         = ["mtongas@gmail.com"]

  spec.summary       = "Theme for a videogame glossary."
  spec.homepage      = "https://github.com/michellejt/videogame-glossary-jekyll-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
end
