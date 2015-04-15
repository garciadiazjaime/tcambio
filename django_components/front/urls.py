from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
	url(r'^$', 'django_components.front.views.index', name='index'),
    url(r'^nosotros', 'django_components.front.views.index', name='index'),
    url(r'^contacto', 'django_components.front.views.index', name='index'),

    # PARTIAL VIEWS
    url(r'^partial/home$', 'django_components.front.views.home', name='home'),
    url(r'^partial/about-us$', 'django_components.front.views.about_us', name='about_us'),
    url(r'^partial/contact$', 'django_components.front.views.contact', name='contact'),
)
