import PropTypes from 'prop-types';

export const crownTypeCardProps = {
  title: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.elementType.isRequired,
  color: PropTypes.string.isRequired
};

export const serviceCardProps = {
  service: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onShowInfo: PropTypes.func.isRequired
};

export const infoModalProps = {
  service: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};
