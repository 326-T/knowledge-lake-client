include .env.local

SERVICE_NM := knowledge-lake-client

puppeteer-ci:
	@$(MAKE) fly/set PIPELINE=puppeteer-ci
	@$(MAKE) fly/unpause PIPELINE=puppeteer-ci

puppeteer-ci/destroy:
	@$(MAKE) fly/destroy PIPELINE=puppeteer-ci

puppeteer-ci/hijack:
	@$(MAKE) fly/hijack PIPELINE=puppeteer-ci JOB=puppeteer-ci

fly/download-fly-command:
	curl -v -fsL "$(CONCOURSE_URL)/api/v1/cli?arch=amd64&platform=darwin" --output - > /usr/local/bin/fly
	chmod u+x /usr/local/bin/fly

fly/login:
	fly login \
		--target $(CONCOURSE_TEAM) \
		-c $(CONCOURSE_URL) \
		--team-name $(CONCOURSE_TEAM) \
		--insecure \
		--open-browser

fly/set:
	fly set-pipeline \
		--non-interactive \
		--target $(CONCOURSE_TEAM) \
		--pipeline "$(SERVICE_NM)__$(PIPELINE)" \
		--config pipelines/$(PIPELINE).yml \
		--load-vars-from config/config.yml

fly/unpause:
	fly unpause-pipeline \
		--target $(CONCOURSE_TEAM) \
		--pipeline "$(SERVICE_NM)__$(PIPELINE)"

fly/destroy:
	fly destroy-pipeline \
		--target $(CONCOURSE_TEAM) \
		--pipeline "$(SERVICE_NM)__$(PIPELINE)" \
		--non-interactive

fly/hijack:
	fly hijack \
		--target $(CONCOURSE_TEAM) \
		--job "$(SERVICE_NM)__$(PIPELINE)/$(JOB)" sh