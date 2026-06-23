# GitHub Pages 배포 가이드

이 문서는 연세어학원 홈페이지를 GitHub Pages로 배포하는 순서입니다.

## 1. GitHub 저장소 만들기

GitHub에서 `Create a new repository`를 누릅니다.

권장 설정:

```text
Repository name: yonsei-academy-homepage
Description: 연세어학원 홈페이지
Visibility: Public
Add README: Off
Add .gitignore: Off
Add license: Off
```

이미 이 폴더 안에 `README.md`, `.gitignore`, `.nojekyll` 파일이 있으므로 GitHub에서 새로 만들지 않는 것이 좋습니다.

## 2. 파일 업로드 화면 열기

저장소를 만든 뒤 아래 메뉴를 선택합니다.

```text
Add file > Upload files
```

또는 빈 저장소 화면에 보이는 `uploading an existing file` 링크를 눌러도 됩니다.

## 3. 업로드할 파일 선택

중요: `Academy-Homepage-Starter-Kit` 폴더 자체를 올리는 것이 아니라, 폴더 안의 파일과 `images` 폴더를 올립니다.

업로드할 항목:

```text
index.html
style.css
script.js
README.md
DEPLOY.md
CUSTOMIZE_CHECKLIST.md
CODEX_GUIDE.md
.nojekyll
.gitignore
images 폴더
```

업로드 목록에 `index.html`이 보이면 정상입니다.

## 4. Commit changes 누르기

파일 업로드가 끝나면 페이지 아래의 `Commit changes` 버튼을 누릅니다.

커밋 메시지는 기본값 그대로 두어도 됩니다.

## 5. GitHub Pages 설정 열기

저장소 상단 메뉴에서 `Settings`를 누릅니다.

왼쪽 메뉴에서 `Pages`를 누릅니다.

## 6. 배포 방식 설정

`Build and deployment` 영역에서 아래처럼 설정합니다.

```text
Source: Deploy from a branch
Branch: main
Folder: /root
```

설정 후 `Save`를 누릅니다.

## 7. 배포 주소 확인

잠시 기다리면 GitHub Pages 화면에 배포 주소가 표시됩니다.

주소 형식은 보통 아래와 비슷합니다.

```text
https://깃허브아이디.github.io/yonsei-academy-homepage/
```

주소를 열었을 때 연세어학원 홈페이지가 보이면 배포가 완료된 것입니다.

## 8. 수정 후 다시 배포하기

나중에 문구나 디자인을 수정한 뒤 같은 저장소에 파일을 다시 업로드하거나 커밋하면 GitHub Pages가 자동으로 다시 배포합니다.

보통 반영까지 1분 정도 걸립니다.

## 배포 전 마지막 확인

- `index.html`이 저장소 맨 위에 있는가?
- `style.css`와 `script.js`도 같은 위치에 있는가?
- `images` 폴더가 함께 올라갔는가?
- GitHub Pages 설정의 Folder가 `/root`인가?
- 전화번호가 `031-245-5669`로 되어 있는가?
- 주소가 `경기도 수원시 장안구 정자천로 173번길 17 8층`으로 되어 있는가?
