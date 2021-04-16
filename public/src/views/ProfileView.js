import BaseView from './BaseView.js';

class ProfileView extends BaseView {
  constructor() {
    super();

    this.member = this.getElement('#member');
  }

  renderProfile(profile) {
    this.createElement('img', {
      attributes: {
        src: profile.picture,
      },
      parent: this.member,
    });
    this.createElement('div', {
      classList: ['member__detail'],
      attributes: {
        src: profile.picture,
      },
      parent: this.member,
      children: [
        this.createElement('h3', { children: [profile.name] }),
        this.createElement('h3', { children: [profile.email] }),
      ],
    });
  }
}

export default ProfileView;
