import React, { Component } from "react";
import {
  FacebookShareCount,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  LineShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
  LineIcon,
} from "react-share";
import "./SocialMediaShare.css";

class SocialMediaShare extends Component {
  render() {
    const shareUrl =
      "https://iter-e3ef2.web.app/confirm?city=Boston&number=0K88AwVjoGLDTtDT5VeC";
    const title = "my trip";

    return (
      <div className="Demo__container">
        <div className="step-3">
          <div className="Demo__some-network  ">
            <FacebookShareButton
              url={shareUrl}
              quote={title}
              className="Demo__some-network__share-button"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <div>
              <FacebookShareCount
                url={shareUrl}
                className="Demo__some-network__share-count"
              >
                {(count) => count}
              </FacebookShareCount>
            </div>
          </div>

          <div className="Demo__some-network">
            <TwitterShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <div className="Demo__some-network__share-count">&nbsp;</div>
          </div>

          <div className="Demo__some-network">
            <LinkedinShareButton
              url={shareUrl}
              className="Demo__some-network__share-button"
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>

          <div className="Demo__some-network">
            <EmailShareButton
              url={shareUrl}
              subject={title}
              body="body"
              className="Demo__some-network__share-button"
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
          </div>

          <div className="Demo__some-network">
            <LineShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <LineIcon size={32} round />
            </LineShareButton>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialMediaShare;
