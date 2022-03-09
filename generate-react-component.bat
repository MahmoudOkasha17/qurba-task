@echo off
set /p component="Component name "
set /p shared="Shared? (y/n) "
if "%shared%" == "n" set /p module="Module type? (home/followers/offers/profile/restaurants) "
if "%shared%" == "y" (
  cd "%CD%\src\app\shared\components"
  if not exist "%CD%\src\app\shared\components\%component%\NUL" mkdir "%component%"
  cd "%component%"
  echo.> %component%.component.tsx
  echo.> %component%.styles.ts
  echo.> %component%.ts
) else (
  if "%module%" == "home" (
    cd "%CD%\src\app\modules\home"
    if not exist "%CD%\src\app\modules\home\%component%\NUL" mkdir "%component%"
  )
  if "%module%" == "followers" (
    cd "%CD%\src\app\modules\followers"
    if not exist %CD%\src\app\modules\followers\%component%\NUL mkdir "%component%""
  )
  if "%module%" == "offers" (
    cd "%CD%\src\app\modules\offers"
    if not exist %CD%\src\app\modules\offers\%component%\NUL mkdir "%component%""
  )
  if "%module%" == "profile" (
    cd "%CD%\src\app\modules\profile"
    if not exist %CD%\src\app\modules\profile\%component%\NUL mkdir "%component%""
  )
  if "%module%" == "restaurants" (
    cd "%CD%\src\app\modules\restaurants"
    if not exist %CD%\src\app\modules\restaurants\%component%\NUL mkdir "%component%""
  )
	
  cd "%component%"
  echo.> %component%.component.tsx
  echo.> %component%.styles.ts
  echo.> %component%.ts
)

