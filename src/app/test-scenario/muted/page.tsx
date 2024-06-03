import {
  CContainer,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";

export default function Page() {
  const TEST_VIDEO_URL =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  return (
    <main>
      <CContainer>
        <h1 className="title">Muted</h1>

        <CContainer className="video-container">
          <video
            autoPlay
            muted
            className="video"
            src={TEST_VIDEO_URL}
            poster="https://via.placeholder.com/1920x1080"
          ></video>
        </CContainer>
        <CContainer className="code-container">
          <pre>
            {`
<video
  autoPlay
  muted
></video>
          `}
          </pre>
        </CContainer>

        <CContainer className="tested-table" sm>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Tested Browser</CTableHeaderCell>
                <CTableHeaderCell></CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell>Chrome</CTableDataCell>
                <CTableDataCell>work</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CContainer>
      </CContainer>
    </main>
  );
}
