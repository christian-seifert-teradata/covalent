import './notebook-cell';

export default {
  title: 'Components/Notebook Cell',
  args: {
    code: '',
    index: 0,
    language: 'markdown',
    loading: false,
    selected: true,
    showEditor: true,
    timesExecuted: 2,
  },
};

const Template = ({
  code,
  index,
  language,
  loading,
  selected,
  showEditor,
  timesExecuted,
}) => {
  return `<div style="width: 800px;">
            <cv-notebook-cell code="${code}" index="${index}" language="${language}" timesExecuted="${timesExecuted}" ${
    showEditor ? 'showEditor' : ''
  } ${selected ? 'selected' : ''} ${loading ? 'loading' : ''}
  ></cv-notebook-cell>
          </div>`;
};

export const Basic = Template.bind({});