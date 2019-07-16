/**
 * ClassController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  updateVideoUrl: async (req, res) => {
    const updatedClass = await Class.update({ id: req.body.id })
      .set({
        videoUrl: req.body.videoUrl
      })
      .fetch();
    return res.send({
      message: 'VideoUrl on class was updated.',
      updatedClass
    });
  }

};

