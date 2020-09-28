import { secrets } from '@config/secrets';

import { Survey } from '@entities/Survey';

export const surveyTemplate = (survey: Survey) => `
  <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
    style="width:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">

  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>mailing</title>
    <!--[if (mso 16)]><style type="text/css">     a {text-decoration: none;}     </style><![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]><xml> <o:OfficeDocumentSettings> <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>
  96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]-->
    <!--[if !mso]><!-- -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet">
    <!--<![endif]-->
    <style type="text/css">
      #outlook a {
        padding: 0;
      }

      .ExternalClass {
        width: 100%;
      }

      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }

      .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }

      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }

      @media only screen and (max-width:600px) {

        p,
        ul li,
        ol li,
        a {
          font-size: 16px !important;
          line-height: 150% !important
        }

        h1 {
          font-size: 32px !important;
          text-align: center;
          line-height: 120% !important
        }

        h2 {
          font-size: 26px !important;
          text-align: center;
          line-height: 120% !important
        }

        h3 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important
        }

        h1 a {
          font-size: 32px !important
        }

        h2 a {
          font-size: 26px !important
        }

        h3 a {
          font-size: 20px !important
        }

        .es-menu td a {
          font-size: 16px !important
        }

        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 16px !important
        }

        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 16px !important
        }

        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important
        }

        *[class="gmail-fix"] {
          display: none !important
        }

        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important
        }

        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important
        }

        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important
        }

        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important
        }

        .es-button-border {
          display: inline-block !important
        }

        a.es-button {
          font-size: 16px !important;
          display: inline-block !important;
          border-width: 15px 30px 15px 30px !important
        }

        .es-btn-fw {
          border-width: 10px 0px !important;
          text-align: center !important
        }

        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
          width: 100% !important
        }

        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important
        }

        .es-adapt-td {
          display: block !important;
          width: 100% !important
        }

        .adapt-img {
          width: 100% !important;
          height: auto !important
        }

        .es-m-p0 {
          padding: 0px !important
        }

        .es-m-p0r {
          padding-right: 0px !important
        }

        .es-m-p0l {
          padding-left: 0px !important
        }

        .es-m-p0t {
          padding-top: 0px !important
        }

        .es-m-p0b {
          padding-bottom: 0 !important
        }

        .es-m-p20b {
          padding-bottom: 20px !important
        }

        .es-mobile-hidden,
        .es-hidden {
          display: none !important
        }

        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important
        }

        tr.es-desk-hidden {
          display: table-row !important
        }

        table.es-desk-hidden {
          display: table !important
        }

        td.es-desk-menu-hidden {
          display: table-cell !important
        }

        .es-menu td {
          width: 1% !important
        }

        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important
        }

        table.es-social {
          display: inline-block !important
        }

        table.es-social td {
          display: inline-block !important
        }
      }
    </style>
  </head>

  <body
    style="width:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
    <div class="es-wrapper-color" style="background-color:#EEEEEE">
      <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#eeeeee"></v:fill> </v:background><![endif]-->
      <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top">
        <tr style="border-collapse:collapse">
          <td valign="top" style="padding:0;Margin:0">
            <table class="es-content" cellspacing="0" cellpadding="0" align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
              <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                  <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                    <tr style="border-collapse:collapse">
                      <td align="left" bgcolor="#1d3557"
                        style="padding:0;Margin:0;padding-left:35px;padding-right:35px;background-color:#1D3557">
                        <table cellpadding="0" cellspacing="0" width="100%"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                          <tr style="border-collapse:collapse">
                            <td align="left" style="padding:0;Margin:0;width:530px">
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr style="border-collapse:collapse">
                                  <td align="center" style="padding:35px;Margin:0;font-size:0px"><img class="adapt-img"
                                      src="https://isfidq.stripocdn.email/content/guids/CABINET_f2fc0b49423f833c127bcda48062f0ff/images/1761600980947824.png"
                                      alt
                                      style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                      width="319" height="77"></td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="border-collapse:collapse">
                      <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:35px;padding-right:35px">
                        <table width="100%" cellspacing="0" cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                          <tr style="border-collapse:collapse">
                            <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr style="border-collapse:collapse">
                                  <td align="center"
                                    style="Margin:0;padding-top:20px;padding-bottom:25px;padding-left:35px;padding-right:35px;font-size:0">
                                    <a target="_blank" href="https://viewstripo.email/"
                                      style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:15px;text-decoration:none;color:#ED8E20"><img
                                        src="https://isfidq.stripocdn.email/content/guids/CABINET_75694a6fc3c4633b3ee8e3c750851c02/images/26081522074491960.png"
                                        alt
                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                        width="120" height="96"></a></td>
                                </tr>
                                <tr style="border-collapse:collapse">
                                  <td align="center" style="padding:0;Margin:0">
                                    <h2
                                      style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#333333">
                                      Hi, I'd like your feedback!</h2>
                                  </td>
                                </tr>
                                <tr style="border-collapse:collapse">
                                  <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px">
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777">
                                      Please answer the following question:<br><br>
                                    </p>
                                    <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:26px;font-weight:bold;color:#1d3557">
                                      ${survey.question}
                                    </p>
                                  </td>
                                </tr>
                                <tr style="border-collapse:collapse">
                                  <td align="center"
                                    style="padding:0;Margin:0;padding-bottom:15px;padding-top:20px;font-size:0">
                                    <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0"
                                      role="presentation"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                      <tr style="border-collapse:collapse">
                                        <td
                                          style="padding:0;Margin:0;border-bottom:3px solid #EEEEEE;background:#FFFFFFnone repeat scroll 0% 0%;height:1px;width:100%;margin:0px">
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="border-collapse:collapse">
                      <td align="left"
                        style="Margin:0;padding-top:20px;padding-left:35px;padding-right:35px;padding-bottom:40px">
                        <!--[if mso]><table style="width:530px" cellpadding="0" cellspacing="0"><tr><td style="width:255px" valign="top"><![endif]-->
                        <table cellspacing="0" cellpadding="0" align="left" class="es-left"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                          <tr style="border-collapse:collapse">
                            <td class="es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:255px">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr style="border-collapse:collapse">
                                  <td align="center" style="padding:0;Margin:0;font-size:0px">
                                    <a href="${secrets.redirectDomain}/api/surveys/${survey.id}/yes">
                                      <img class="adapt-img"
                                        src="https://isfidq.stripocdn.email/content/guids/CABINET_f2fc0b49423f833c127bcda48062f0ff/images/35741600981588769.png"
                                        alt
                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                        width="100" height="100">
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td><td style="width:20px"></td><td style="width:255px" valign="top"><![endif]-->
                        <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                          <tr style="border-collapse:collapse">
                            <td align="left" style="padding:0;Margin:0;width:255px">
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr style="border-collapse:collapse">
                                  <td align="center" style="padding:0;Margin:0;font-size:0px">
                                    <a href="${secrets.redirectDomain}/api/surveys/${survey.id}/no">
                                      <img class="adapt-img"
                                        src="https://isfidq.stripocdn.email/content/guids/CABINET_f2fc0b49423f833c127bcda48062f0ff/images/84451600981598007.png"
                                        alt
                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                        width="100" height="100">
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" class="es-content" align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
              <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                  <table class="es-content-body"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#1D3557;width:600px;border-bottom:10px solid #0098D7"
                    cellspacing="0" cellpadding="0" bgcolor="#1d3557" align="center">
                    <tr style="border-collapse:collapse">
                      <td align="left" style="padding:0;Margin:0">
                        <table width="100%" cellspacing="0" cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                          <tr style="border-collapse:collapse">
                            <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr style="border-collapse:collapse">
                                  <td style="padding:0;Margin:0">
                                    <table class="es-menu" width="40%" cellspacing="0" cellpadding="0" align="center"
                                      role="presentation"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                      <tr class="links-images-top" style="border-collapse:collapse">
                                        <td
                                          style="Margin:0;padding-left:5px;padding-right:5px;padding-top:35px;padding-bottom:30px;border:0"
                                          width="100%" bgcolor="transparent" align="center"><a target="_blank"
                                            style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'lucida sans unicode', 'lucida grande', sans-serif;font-size:20px;text-decoration:none;display:block;color:#FFFFFF"
                                            href="https://rm30-mailing.herokuapp.com"><img
                                              src="https://isfidq.stripocdn.email/content/guids/CABINET_f2fc0b49423f833c127bcda48062f0ff/images/73441600980765505.png"
                                              alt="Visit our website" title="Visit our website" height="27"
                                              align="absmiddle" width="27"
                                              style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-bottom:5px"><br>Visit
                                            our website</a></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" class="es-footer" align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
              <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                  <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                    <tr style="border-collapse:collapse">
                      <td align="left"
                        style="Margin:0;padding-top:35px;padding-left:35px;padding-right:35px;padding-bottom:40px">
                        <table width="100%" cellspacing="0" cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                          <tr style="border-collapse:collapse">
                            <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr style="border-collapse:collapse">
                                  <td align="center" style="padding:0;Margin:0;padding-bottom:15px;font-size:0px"><img
                                      src="https://isfidq.stripocdn.email/content/guids/CABINET_f2fc0b49423f833c127bcda48062f0ff/images/29721600966375044.png"
                                      alt="Beretun logo"
                                      style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                      title="Beretun logo" width="37" height="37"></td>
                                </tr>
                                <tr style="border-collapse:collapse">
                                  <td align="center" style="padding:0;Margin:0;padding-bottom:35px">
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333">
                                      <b>made with love by rm30</b></p>
                                  </td>
                                </tr>
                                <tr style="border-collapse:collapse">
                                  <td esdev-links-color="#777777" align="center" class="es-m-txt-c"
                                    style="padding:0;Margin:0;padding-bottom:5px">
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#777777">
                                      If you don't know why you're receiving this survey, please ignore this email.</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table class="es-content" cellspacing="0" cellpadding="0" align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
              <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                  <table class="es-content-body"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                    cellspacing="0" cellpadding="0" align="center">
                    <tr style="border-collapse:collapse">
                      <td align="left"
                        style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px">
                        <table width="100%" cellspacing="0" cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                          <tr style="border-collapse:collapse">
                            <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr style="border-collapse:collapse">
                                  <td class="es-infoblock made_with" align="center"
                                    style="padding:0;Margin:0;line-height:120%;font-size:0;color:#CCCCCC"><a
                                      target="_blank"
                                      href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=accessory&utm_content=trigger_newsletter2"
                                      style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:12px;text-decoration:none;color:#CCCCCC"><img
                                        src="https://isfidq.stripocdn.email/content/guids/CABINET_9df86e5b6c53dd0319931e2447ed854b/images/64951510234941531.png"
                                        alt width="125" height="56"
                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>

  </html>
  `;
