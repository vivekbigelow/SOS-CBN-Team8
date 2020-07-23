from rest_framework import routers

from .viewset import ConsumerViewSet, VolunteerViewSet

router = routers.DefaultRouter()
router.register('consumers', ConsumerViewSet)
router.register('volunteers', VolunteerViewSet)