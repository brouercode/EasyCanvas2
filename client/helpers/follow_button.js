Template.followButton.helpers({
 canFollow: function() {
  return false;
 },
 isFollowing: function() {
  return Session.get('isFollowing');
 }
});