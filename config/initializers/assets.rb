# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
Rails.application.config.assets.precompile += %w( application.js dashboard.js project_application.js project_apply.js project_search.js dynamic_management.js publicity.js plan_reported.js county_check.js province_respond.js build_publicity.js province_order.js city_order.js fund_contract.js construct_contract.js letter_of_authorization.js fund_publicity.js acceptance_apply.js acceptance_scene.js acceptance_sheet.js acceptance_start.js acceptance_update.js maintenance_protocol.js project_transfer.js set_team.js tender.js visa_apply.js visa_check.js visa_update.js)
