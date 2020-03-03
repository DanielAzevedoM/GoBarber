import Notification from '../schemas/notification';

import User from '../models/User';

class NotificationController {
  async index(req, res) {
    const checkUserIsProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!checkUserIsProvider) {
      return res
        .status(401)
        .json({ error: 'Only providers can load notifications' });
    }

    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return res.send(notifications);
  }
}

export default new NotificationController();
