import './icon';
import iconList from '../../../icons/material-codepoints.json';

const MAT_ICON_LIST = Object.keys(iconList);

const COV_ICON_LIST = [
  'advanced_sql',
  'advanced_sql_outlined',
  'alias_arrow',
  'alias_arrow_outlined',
  'api',
  'api_outlined',
  'api_ondark',
  'application',
  'application_outlined',
  'attribution',
  'attribution_outlined',
  'auto_refresh_off',
  'auto_refresh_off_outlined',
  'auto_refresh_on',
  'auto_refresh_on_outlined',
  'autorefresh_pause',
  'autorefresh_pause_outlined',
  'autorenew_on',
  'autorenew_on_outlined',
  'autorenew_off',
  'autorenew_off_outlined',
  'branch',
  'branch_outlined',
  'bucket',
  'bucket_outlined',
  'cluster_analysis',
  'cluster_analysis_outlined',
  'code_deployed',
  'code_deployed_outlined',
  'code_deployed_retired',
  'code_deployed_retired_outlined',
  'code_fork',
  'code_fork_outlined',
  'column',
  'column_outlined',
  'compute_cluster',
  'compute_cluster_outlined',
  'compute_cluster_group',
  'compute_cluster_group_outlined',
  'compute_groups',
  'compute_groups_outlined',
  'compute_profile',
  'compute_profile_outlined',
  'compute_profile_dark',
  'compute_profile_light',
  'connected_identity',
  'connected_identity_outlined',
  'created_document',
  'created_document_outlined',
  'data_management',
  'data_management_outlined',
  'data_preparation',
  'data_preparation_outlined',
  'data_protection',
  'data_protection_outlined',
  'data_sharing',
  'data_sharing_outlined',
  'data_source',
  'data_source_outlined',
  'data_source_type_amazon',
  'data_source_type_amazon_outlined',
  'data_source_type_azure',
  'data_source_type_azure_outlined',
  'data_source_type_cloudera',
  'data_source_type_cloudera_outlined',
  'data_source_type_hdinsight',
  'data_source_type_hdinsight_outlined',
  'data_source_type_microsoft',
  'data_source_type_microsoft_outlined',
  'data_source_type_teradata',
  'data_source_type_teradata_outlined',
  'data_transformation_services',
  'data_transformation_services_outlined',
  'database',
  'database_outlined',
  'database_changed',
  'database_changed_outlined',
  'database_edit',
  'database_edit_outlined',
  'database_foreign',
  'database_foreign_outlined',
  'database_lab',
  'database_lab_outlined',
  'database_none',
  'database_none_outlined',
  'database_search',
  'database_search_outlined',
  'database_synced',
  'database_synced_outlined',
  'database_unreachable',
  'database_unreachable_outlined',
  'disconnect',
  'dock_right',
  'dock_right_outlined',
  'engine',
  'engine_outlined',
  'engine_sql',
  'engine_sql_outlined',
  'file',
  'file_outlined',
  'file_changed',
  'file_changed_outlined',
  'file_edit',
  'file_edit_outlined',
  'file_foreign',
  'file_foreign_outlined',
  'file_lab',
  'file_lab_outlined',
  'file_search',
  'file_search_outlined',
  'file_synced',
  'file_synced_outlined',
  'filter_clear',
  'filter_clear_outlined',
  'formula',
  'formula_outlined',
  'lab',
  'lab_outlined',
  'loader_dots',
  'machine_learning',
  'machine_learning_outlined',
  'machine_learning_ondark',
  'managed_services',
  'managed_services_outlined',
  'merge',
  'merge_outlined',
  'model',
  'model_outlined',
  'model_ondark',
  'model_configuration',
  'model_configuration_outlined',
  'model_configuration_ondark',
  'no_results',
  'no_results_outlined',
  'node_branch',
  'node_merge',
  'node_notification',
  'node_notification_outlined',
  'node_notification_ondark',
  'nos',
  'nos_outlined',
  'object_browser_view',
  'object_browser_view_outlined',
  'object_storage',
  'object_storage_outlined',
  'object_storage_ondark',
  'operations',
  'operations_outlined',
  'operators_divide',
  'operators_divide_outlined',
  'operators_equals',
  'operators_equals_outlined',
  'operators_greater_than',
  'operators_greater_than_outlined',
  'operators_greater_than_or_equal',
  'operators_greater_than_or_equal_outlined',
  'operators_less_than',
  'operators_less_than_outlined',
  'operators_less_than_or_equal',
  'operators_less_than_or_equal_outlined',
  'operators_multiply',
  'operators_multiply_outlined',
  'operators_not_equal',
  'operators_not_equal_outlined',
  'operators_parentheses',
  'operators_parentheses_outlined',
  'operators_parenthesis_left',
  'operators_parenthesis_left_outlined',
  'operators_parenthesis_right',
  'operators_parenthesis_right_outlined',
  'operators_subtract',
  'operators_subtract_outlined',
  'pinned',
  'pin_outlined',
  'placeholder',
  'placeholder_outlined',
  'primary_cluster',
  'primary_cluster_outlined',
  'product_analyst',
  'product_analyst_outlined',
  'product_appcenter',
  'product_appcenter_outlined',
  'product_console',
  'product_console_outlined',
  'product_cx',
  'product_cx_outlined',
  'product_editor',
  'product_editor_outlined',
  'product_jupyterhub',
  'product_jupyterhub_outlined',
  'product_modelops',
  'product_modelops_outlined',
  'product_outbound_campaign_manager',
  'product_outbound_campaign_manager_outlined',
  'product_querygrid',
  'product_querygrid_outlined',
  'product_streams',
  'product_streams_outlined',
  'product_vantage',
  'product_vantage_outlined',
  'product_viewpoint',
  'product_viewpoint_outlined',
  'professional_services',
  'professional_services_outlined',
  'report',
  'report_outlined',
  'resize_northeast',
  'resize_northeast_outlined',
  'resize_northwest',
  'resize_northwest_outlined',
  'resize_southeast',
  'resize_southeast_outlined',
  'resize_southwest',
  'resize_southwest_outlined',
  'row',
  'row_outlined',
  'rules',
  'rules_outlined',
  'rules_ondark',
  'rules_insert',
  'rules_insert_outlined',
  'rules_insert_ondark',
  'rules_select',
  'rules_select_outlined',
  'rules_select_ondark',
  'sankey',
  'sankey_outlined',
  'script',
  'script_outlined',
  'script_ondark',
  'script_macro',
  'script_macro_ondark',
  'script_management',
  'script_management_outlined',
  'script_sql',
  'script_sql_outlined',
  'script_sql_ondark',
  'script_stored_procedure',
  'script_stored_procedure_outlined',
  'script_stored_procedure_ondark',
  'segmentation',
  'segmentation_outlined',
  'server',
  'server_outlined',
  'server_changed',
  'server_changed_outlined',
  'server_edit',
  'server_edit_outlined',
  'server_foreign',
  'server_foreign_outlined',
  'server_lab',
  'server_lab_outlined',
  'server_search',
  'server_search_outlined',
  'server_synced',
  'server_synced_outlined',
  'server_workspace',
  'server_workspace_outlined',
  'sftp',
  'sftp_outlined',
  'sftp_ondark',
  'state_cancelled',
  'state_cancelled_outlined',
  'state_caution',
  'state_caution_outlined',
  'state_changed',
  'state_changed_outlined',
  'state_negative',
  'state_negative_outlined',
  'state_paused',
  'state_paused_outlined',
  'state_positive',
  'state_positive_outlined',
  'table',
  'table_outlined',
  'table_changed',
  'table_changed_outlined',
  'table_edit',
  'table_edit_outlined',
  'table_foreign',
  'table_foreign_outlined',
  'table_lab',
  'table_lab_outlined',
  'table_search',
  'table_search_outlined',
  'table_synced',
  'table_synced_outlined',
  'teradata',
  'teradata_outlined',
  'teradata_nocircle',
  'teradata_nobackground',
  'teradata_nobackground_outlined',
  'text_analysis',
  'text_analysis_outlined',
  'undock',
  'undock_outlined',
  'user_defined_function',
  'user_defined_function_outlined',
  'variable',
  'variable_outlined',
  'variable_ondark',
  'view_sankey',
  'wand',
  'wand_outlined',
  'workflow',
  'workflow_outlined',
];

export default {
  title: 'Components/Icon',
  argTypes: {
    icon: {
      options: MAT_ICON_LIST,
      control: { type: 'select' },
    },
    size: {
      options: ['64px', '48px', '24px', '16px'],
      control: { type: 'select' },
    },
  },
  args: {
    icon: 'houseboat',
    size: '48px',
  },
};

const Template = ({ icon, size }, ...args) => {
  const icoElem = document.createElement('cv-icon');
  icoElem.innerText = icon;
  icoElem.style.fontSize = size;

  if (args[0].parameters.showCovIcons) {
    icoElem.setAttribute('iconFont', 'covalent-icons');
  }

  return icoElem;
};

export const MaterialIcons = Template.bind({});

export const CovalentIcons = Template.bind({});
CovalentIcons.parameters = {
  showCovIcons: true,
};

CovalentIcons.argTypes = {
  icon: {
    options: COV_ICON_LIST,
  },
};
CovalentIcons.args = {
  icon: 'product_editor',
};
