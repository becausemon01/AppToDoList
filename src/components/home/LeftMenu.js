import React, {Component} from 'react';

class LeftMenu extends Component {
    render(){
       return(
        <div id="left_menu">
  <div id="list_holder">
    <div>
      <ul id="top_filters">
        <li className="filter" id="filter_inbox">
          <span className="item_icon">
            <svg width={24} height={24} viewBox="0 0 24 24">
              <g fill="currentColor" fillRule="evenodd">
                <path fillRule="nonzero" d="M10 14.5a2 2 0 1 0 4 0h5.5V18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18v-3.5H10z" opacity=".1">
                </path>
                <path fillRule="nonzero" d="M8.062 4h7.876a2 2 0 0 1 1.94 1.515l2.062 8.246a2 2 0 0 1 .06.485V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.754a2 2 0 0 1 .06-.485L6.12 5.515A2 2 0 0 1 8.061 4zm0 1a1 1 0 0 0-.97.757L5.03 14.004a1 1 0 0 0-.03.242V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.754a1 1 0 0 0-.03-.242L16.91 5.757a1 1 0 0 0-.97-.757H8.061zM12 17.25A2.75 2.75 0 0 1 9.295 15H7a.5.5 0 1 1 0-1h2.75a.5.5 0 0 1 .5.5 1.75 1.75 0 0 0 3.5 0 .5.5 0 0 1 .5-.5H17a.5.5 0 1 1 0 1h-2.295A2.75 2.75 0 0 1 12 17.25z">
                </path>
              </g>
            </svg>
          </span>
          <span className="item_content">
            Inbox
            <small className="item_counter" />
          </span>
        </li>
        <li className="filter" id="filter_today">
          <span className="item_icon">
            <svg width={24} height={24} viewBox="0 0 24 24">
              <g fill="currentColor" fillRule="evenodd">
                <path fillRule="nonzero" d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z" opacity=".1">
                </path>
                <path fillRule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z">
                </path>
                <text fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" fontSize={9} transform="translate(4 2)" fontWeight={500}>
                  <tspan x={8} y={15} textAnchor="middle">20</tspan>
                </text>
              </g>
            </svg>
          </span>
          <span className="item_content">
            Today
            <small className="item_counter" />
          </span>
        </li>
        <li className="filter" id="filter_inbox">
          <span className="item_icon">
            <svg width={24} height={24} viewBox="0 0 24 24">
              <g fill="currentColor" fillRule="evenodd">
                <path fillRule="nonzero" d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z" opacity=".1">
                </path>
                <path fillRule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm10 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 8h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z">
                </path>
              </g>
            </svg>
          </span>
          <span className="item_content">
            Next 7 days
            <small className="item_counter" />
          </span>
        </li>
      </ul>
    </div>
    <div>
      <ul id="top_panel">
        <li className="panel">
          <button type="button" aria-expanded="false" className="panel_toggle">
            <div aria-hidden="false" className="panel_toggle_icon">
              <svg width="16px" height="16px" viewBox="0 0 16 16">
                <g transform="translate(-266, -17)" fill="#777777">
                  <path d="M280,22.7581818 L279.1564,22 L273.9922,26.506 L273.4414,26.0254545 L273.4444,26.0281818 L268.8562,22.0245455 L268,22.7712727 C269.2678,23.878 272.8084,26.9674545 273.9922,28 C274.8718,27.2330909 274.0144,27.9809091 280,22.7581818">
                  </path>
                </g>
              </svg>
              <span>Projects</span>
            </div>
          </button>
          <div className="panel_toggle_actions">
            <button type="button" className="adder_icon">
              <svg width={13} height={13}>
                <path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="currentColor" fillRule="evenodd">
                </path>
              </svg>
            </button>
          </div>
          {/* <div class="collapse">
                                  <div class="collapse_wrapper">
                                      <div class="collapse_wrapper_inner">
                                          <ul id="projects_list">
                                              <li class="menu_click" data-type="projects_list_item">
                                                  <table cellpading=0 cellspacing=0 class="item_table">
                                                      <tbody>
                                                          <tr>
                                                              <td class="td_color">
                                                                  <div class="div_color">
                                                                  </div>
                                                              </td>
                                                              <td class="td_name">
                                                                  <span>
                                                                      Wellcome
                                                                      <span class="emoji">
                                                                          <img class="emoji" draggable="false" alt="👋" src="https://twemoji.maxcdn.com/2/72x72/1f44b.png">
                                                                      </span>
                                                                      <div class="counter_count" id="project_count">9</div>
                                                                  </span>
                                                              </td>
                                                              <td class="td_menu">
                                                                  <div class="a"></div>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div> */}
        </li>
        <li className="panel">
          <button type="button" aria-expanded="false" className="panel_toggle">
            <div aria-hidden="false" className="panel_toggle_icon">
              <svg width="16px" height="16px" viewBox="0 0 16 16">
                <g transform="translate(-266, -17)" fill="#777777">
                  <path d="M280,22.7581818 L279.1564,22 L273.9922,26.506 L273.4414,26.0254545 L273.4444,26.0281818 L268.8562,22.0245455 L268,22.7712727 C269.2678,23.878 272.8084,26.9674545 273.9922,28 C274.8718,27.2330909 274.0144,27.9809091 280,22.7581818">
                  </path>
                </g>
              </svg>
              <span>Labels</span>
            </div>
          </button>
          <div className="panel_toggle_actions">
            <button type="button" className="adder_icon">
              <svg width={13} height={13}>
                <path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="currentColor" fillRule="evenodd">
                </path>
              </svg>
            </button>
          </div>
        </li>
        <li className="panel">
          <button type="button" aria-expanded="false" className="panel_toggle">
            <div aria-hidden="false" className="panel_toggle_icon">
              <svg width="16px" height="16px" viewBox="0 0 16 16">
                <g transform="translate(-266, -17)" fill="#777777">
                  <path d="M280,22.7581818 L279.1564,22 L273.9922,26.506 L273.4414,26.0254545 L273.4444,26.0281818 L268.8562,22.0245455 L268,22.7712727 C269.2678,23.878 272.8084,26.9674545 273.9922,28 C274.8718,27.2330909 274.0144,27.9809091 280,22.7581818">
                  </path>
                </g>
              </svg>
              <span>Filters</span>
            </div>
          </button>
          <div className="panel_toggle_actions">
            <button type="button" className="adder_icon">
              <svg width={13} height={13}>
                <path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="currentColor" fillRule="evenodd">
                </path>
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

       );
    }
}
export default LeftMenu;
